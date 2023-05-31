import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const commentPost = async (req, res) => {
    try {
      const { userId, description, picturePath } = req.body;
      const user = await User.findById(userId);
      const newComment = new Post({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        description,
        userPicturePath: user.picturePath,
        picturePath,
        likes: {},
        comments: [],
      });
      await newComment.save();
  
      const comments = await Post.find();
      res.status(201).json(comments);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserComments = async (req, res) => {
    try {
      const { userId } = req.params;
      const comments = await Post.find({ userId});
      res.status(200).json(comments);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* DELETE */
export const deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      await Post.findByIdAndDelete(id);
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };


// export const deleteComment = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { userId } = req.params;
//       const comments = await Post.find({ userId});
//       const isCommented = comments.get(userId);
  
//       if (isCommented) {
//         comments.delete(userId);
//       } else {
//         comments.set(userId, true);
//       }
  
//       const updatedComment = await Post.findByIdAndUpdate(
//         id,
//         { comments: comments },
//         { new: true }
//       );
  
//       res.status(200).json(updatedComment);
//     } catch (err) {
//       res.status(404).json({ message: err.message });
//     }
//   };

export const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.params;
      const comments = await Post.find({ userId, comments });
      await Post.findByIdAndDelete(id.comments);
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };