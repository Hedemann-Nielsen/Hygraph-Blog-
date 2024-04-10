export const Contact = () => {
	return (
		<div className=" my-3 mx-44 p-6 bg-secondary rounded-lg border-primary border">
			<h4 className="text-2xl text-center m-5 uppercase font-semibold">
				Konatakt Strikke Stunder
			</h4>
			<h2 className="text-2xl font-semibold mb-4">Kontakt os</h2>
			<form>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Navn
					</label>
					<input
						type="text"
						name="name"
						className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						name="email"
						className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Emne
					</label>
					<input
						type="text"
						name="Subject"
						className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Besked
					</label>
					<textarea
						name="message"
						rows="4"
						className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
						required></textarea>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-dark transition duration-300">
						Send besked
					</button>
				</div>
			</form>
		</div>
	);
};
