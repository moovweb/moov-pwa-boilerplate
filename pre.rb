#!/usr/bin/env ruby
#
require 'fileutils'

if ENV["MOOV_DEPLOY_SITE_NAME"] == nil
  exit 1
end

if ENV["MOOV_DEPLOY_SITE_NAME"].include? "stage2"
  FileUtils.cp("moov_config_stage2.json","moov_config.json")
elseif ENV["MOOV_DEPLOY_SITE_NAME"].include? "stage"
  FileUtils.cp("moov_config_stage.json","moov_config.json")
elsif ENV["MOOV_DEPLOY_SITE_NAME"].include? "prod"
  FileUtils.cp("moov_config_prod.json", "moov_config.json")
end

exit 0