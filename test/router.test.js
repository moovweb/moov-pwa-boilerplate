const { expect } = require('chai')
const Router = require('../scripts/Router')

describe('Router', function() {
  let router, run
  const handler = params => Promise.resolve(params);

  beforeEach(function() {
    router = new Router()

    run = function(method, path) {
      global.env = { method, path }
      const promise = router.run()

      if (promise) {
        return promise
      } else {
        throw new Error(`no route matched ${method} ${path}`)
      }
    }
  })

  describe('run', function() {
    it('should match based on method', function() {
      router
        .get('/products', () => Promise.resolve('get'))
        .post('/products', () => Promise.resolve('post'))
      
      return Promise.all([
        run('get', '/products').then(result => expect(result).to.equal('get')),
        run('post', '/products').then(result => expect(result).to.equal('post'))
      ])
    })

    it('should support splat', function() {
      router.get('/products/:id(/*seoText)', handler)
      return Promise.all([
        run('get', '/products/1/foo').then(result => expect(result).to.deep.equal({ id: "1", seoText: "foo" })),
        run('get', '/products/1').then(result => expect(result).to.deep.equal({ id: "1", seoText: undefined }))
      ])
    })

    it('should support optional paths', function() {
      router.get('/products/:id(/foo)', handler)
      return Promise.all([
        run('get', '/products/1/foo').then(result => expect(result).to.deep.equal({ id: "1" })),
        run('get', '/products/1').then(result => expect(result).to.deep.equal({ id: "1" }))
      ])
    })

    it('should support optional params', function() {
      router.get('/products/:id(/:foo)', handler)
      return Promise.all([
        run('get', '/products/1/2').then(result => expect(result).to.deep.equal({ id: "1", foo: "2" })),
        run('get', '/products/1').then(result => expect(result).to.deep.equal({ id: "1", foo: undefined }))
      ])
    })
  })

  describe('use', function() {
    it('match a nested route', function() {
      router.use('/products', new Router()
        .get('/:id', handler)
      )

      return run('get', '/products/1').then((result) => {
        expect(result).to.deep.equal({ id: '1' })
      })
    })

    it('should accept params', function() {
      router.use('/products/:id', new Router()
        .get('/reviews/:reviewId', handler)
      )
      
      return run('get', '/products/1/reviews/2').then((result) => {
        expect(result).to.deep.equal({ id: '1', reviewId: '2' })
      })
    });

    it('should accept infinite levels of nesting', function() {
      router.use('/products', new Router()
        .get('/:productId', handler)
        .use('/:productId/reviews', new Router()
          .get('/:reviewId', handler)
        )
      );

      return run('get', '/products/1/reviews/2').then((result) => {
        expect(result).to.deep.equal({ productId: '1', reviewId: '2' })
      })
    })
  })
})