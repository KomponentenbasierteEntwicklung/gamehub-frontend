import '../App.css'

export default function PageNotFound() {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="text-center">
                <h1 className="text-3xl">Whoops! Page Not Found 404</h1>
                <a href="/home">Click here to visit home page</a>
            </div>
        </div>
    )
}
