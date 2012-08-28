require 'sinatra'
require 'slim'
require 'sass'

get '/' do
  slim :index
end

get '/css/:file.css' do
  scss "scss/#{params[:file]}".to_sym, :style => :expanded
end