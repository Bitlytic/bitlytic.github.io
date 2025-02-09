export type VideoPost = {
	layout: string;
	title: string;
	slug: string;
	link: string;
	videoDate: string;
	preview?: boolean;
}


export type ProjectPost = {
	layout: string;
	title: string;
	slug: string;
	postDate: string;
	createDate: string;
	sourceCode?: string;
	preview?: boolean;
}