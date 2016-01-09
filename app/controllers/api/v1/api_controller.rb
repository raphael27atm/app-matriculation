module API
  module V1
    class ApiController < ApplicationController
      protect_from_forgery with: :null_session

      before_filter :verify_secret_key!

      def index
        @resources = resource_class.send(:all)
        render json: @resources
      end

      def show
        render json: resource
      end

      def create
        @resource = resource_class.send(:create, resource_params)
        render json: @resource
      end

      def update
        resource.update_attributes(resource_params)
        render json: resource
      end

      def destroy
        resource.delete
        head 204
      end

      private

      def resource_class
        resource_class_name.classify.constantize
      end

      def resource_params
        params.require(resource_class_name.to_sym).permit!
      end

      def resource
        @resource ||= resource_class.send(:find, params[:id])
      end

      def verify_secret_key!
        #check for the secret token
        if (params[:api_key] != ProficiencyTest::Application.config.secret_api_key)
          render json: { message: "Who are you?" }, status: :unauthorized
        end
        params.delete :api_key
      end

    end
  end
end
