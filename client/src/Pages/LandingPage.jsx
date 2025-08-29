import { Link } from "react-router-dom";
import React from "react";

function LandingPage() {
	return (
		<div className=" flex flex-col flex-grow bg-[rgb(var(--bg))] text-[rgb(var(--text))] overflow-y-auto no-scrollbar">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center flex-1 px-6 text-center">
				<h1 className="text-4xl md:text-6xl font-extrabold mb-4">
					Welcome to <span className="text-[rgb(var(--primary))]">QueryForge</span>
				</h1>
				<p className="text-lg md:text-2xl mb-8 max-w-2xl">
					Instantly create, manage, and explore QnA systems powered by AI. Attach PDFs, ask questions, and get smart answers.
				</p>
				<Link
					to="/qna/new"
					className="inline-block px-8 py-3 rounded-xl bg-[rgb(var(--primary))] text-[rgb(var(--bg))] font-semibold text-lg shadow hover:opacity-90 transition"
				>
					Get Started
				</Link>
			</section>

			{/* Features Section */}
			<section className="bg-[rgb(var(--bg-secondary))] py-12">
				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
					<div className="p-6 rounded-lg shadow bg-[rgb(var(--bg))] border border-[rgb(var(--secondary))]">
						<h3 className="font-bold text-[rgb(var(--primary))] mb-2">AI-Powered QnA</h3>
						<p className="text-sm text-[rgb(var(--text))]">Ask questions and get instant, intelligent answers from your provided context</p>
					</div>
					<div className="p-6 rounded-lg shadow bg-[rgb(var(--bg))] border border-[rgb(var(--secondary))]">
						<h3 className="font-bold text-[rgb(var(--primary))] mb-2">PDF Attachments</h3>
						<p className="text-sm text-[rgb(var(--text))]">Upload PDFs and let QueryForge extract and answer from your content.</p>
					</div>
					<div className="p-6 rounded-lg shadow bg-[rgb(var(--bg))] border border-[rgb(var(--secondary))]">
						<h3 className="font-bold text-[rgb(var(--primary))] mb-2">Web Crawling</h3>
						<p className="text-sm text-[rgb(var(--text))]">Attach link of the websites you want to crawl</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-6 text-center text-xs text-[rgb(var(--secondary))]">
				&copy; {new Date().getFullYear()} QueryForge. All rights reserved.
			</footer>
		</div>
	);
}

export default LandingPage;