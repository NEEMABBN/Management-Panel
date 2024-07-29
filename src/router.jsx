import BlogPage from "./BlogPage";
import CategoryPage from "./CategoryPage";
import CreateBlog from "./CreateBlog";
import EditBlogComponent from "./EditBlogComponent";
import EditComponent from "./EditComponent";
import ModalComponent from "./ModalComponent";

const router = [
	{
		path: "/",
		Element: <CategoryPage />,
	},
	{
		path: "/Category/:id",
		Element: <CategoryPage />,
	},
	{
		path: "/createEvent",
		Element: <ModalComponent />,
	},
	{
		path: "/createEvent/:id",
		Element: <ModalComponent />,
	},
	{
		path: "/Edit/:id",
		Element: <EditComponent />,
	},
	{
		path: "/Blog",
		Element: <BlogPage />,
	},
	{
		path: "/CreateBlog",
		Element: <CreateBlog />,
	},
	{
		path: "/EditBlog/:id",
		Element: <EditBlogComponent />,
	},
];

export default router;
