export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center py-8 px-4 bg-gray-100 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Udiel Oliveira. All rights reserved.
            </p>
        </footer>
    );
}