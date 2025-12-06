'use client';

const Loading = () => {
	return (
		<div className="fixed inset-0 flex flex-col justify-center items-center bg-background z-50">
			<h1 className="text-2xl md:text-3xl font-bold text-textColor mb-10 animate-pulse">
				Loading About Page...
			</h1>

			<div className="w-12 h-12 rounded-full border-4 border-t-transparent border-textColor animate-spin"></div>
		</div>
	);
};

export default Loading;