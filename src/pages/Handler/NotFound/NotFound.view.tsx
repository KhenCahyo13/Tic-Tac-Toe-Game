const NotFoundView: React.FC = () => (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold">404</p>
            <p className="text-sm">Page Not Found</p>
        </div>
    </div>
);

export default NotFoundView;