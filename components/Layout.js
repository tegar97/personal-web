export default function Layout({ children }) {
    return (
        <div className="antialiased font-sans min-h-screen tracking-tighter bg-gray-900 text-white flex justify-center items-center">
            {children}
        </div>
    );
}
