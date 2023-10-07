import { PostProps } from "pages/home";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PostBoxProps {
	post: PostProps;
}

export default function PostBox({ post }: PostBoxProps) {
	const handleDelete = () => {};
	return (
		<div className="post__box" key={post?.id}>
			<Link to={`/posts/${post?.id}`}>
				<div className="post__box-profile">
					<div className="post__flex">
						{post?.profileUrl ? (
							<img />
						) : (
							<FaUserCircle className="post__box-profile-icon" />
						)}
						<div className="post__email">{post?.email}</div>
						<div className="post__createdAt">{post?.createdAt}</div>
					</div>
					<div className="post__box-content">{post?.content}</div>
				</div>
			</Link>
			<div className="post__box-footer">
				{/* post.uid === user.uid일 때 */}
				<>
					<button
						type="button"
						className="post__delete"
						onClick={handleDelete}
					>
						Delete
					</button>
					<button type="button" className="post__edit">
						<Link to={`/posts/edit/${post?.id}`}></Link>
						Edit
					</button>
					<button type="button" className="post__likes">
						<AiFillHeart />
						{post?.likeCount || 0}
					</button>
					<button type="button" className="post__comments">
						<FaRegComment />
						{post?.comments?.length || 0}
					</button>
				</>
			</div>
		</div>
	);
}
