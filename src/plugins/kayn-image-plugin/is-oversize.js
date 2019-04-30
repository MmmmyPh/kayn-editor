export const AVAILABLE_SIZE = 2;

export default function isOverSize( file ) {
	return file.size / 1024 / 1024 > AVAILABLE_SIZE;
}