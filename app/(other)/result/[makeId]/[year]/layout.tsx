export default function BaseLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-full max-w-screen-2xl px-12 sm:px-16 md:px-24 lg:px-44 py-12">
            {children}
        </div>
    );
}
