import React from "react";

const CreatePost = () => {
  return (
    <div className="max-w-xlg mx-auto bg-base-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      
      <form className="flex flex-col gap-4">
        {/* Title */}
        <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input 
            type="text" 
            placeholder="Enter post title" 
            className="input input-bordered w-full" 
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Tags</span>
          </label>
          <input 
            type="text" 
            placeholder="Enter tags by press space button" 
            className="input input-bordered w-full" 
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Reacts</span>
          </label>
          <input 
            type="text" 
            placeholder="Enter how many people react" 
            className="input input-bordered w-full" 
          />
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea 
            className="textarea textarea-bordered w-full" 
            placeholder="Write your post here..." 
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
