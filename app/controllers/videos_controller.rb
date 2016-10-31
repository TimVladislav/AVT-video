class VideosController < ApplicationController
  before_action :ifadm, only: [:destroy, :edit, :new, :create, :update]
  before_action :find_video_by_id, only: [:show, :edit, :update, :destroy]

  def index
    @videos = Video.all.order("created_at DESC")
  end
  def show
  end
  def new
    @video = Video.new
  end
  def edit
  end
  def update
    if @video.update(video_params)
      redirect_to videos_path
    else
      render params
    end
  end
  def create
    @video = Video.new(video_params)
    if @video.save
      redirect_to videos_path
    else
      render 'new'
    end
  end
  def destroy
    @video.destroy
    redirect_to videos_path
  end

  private
    def ifadm
      if user_signed_in?
        unless current_user.adm
          redirect_to "/"
        end
      else
        redirect_to "/"
      end
    end

    def video_params
      params.require(:video).permit(:title, :content, :category)
    end

    def find_video_by_id
      @video = Video.find(params[:id])
    end
end
