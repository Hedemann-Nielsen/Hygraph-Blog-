export const PageWrapper = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-dark">
			{children}
		</div>
	);
};
