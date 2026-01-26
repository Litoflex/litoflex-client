export default function NotFound() {
    return (
       <div
            style={{
				height: "calc(100%)",
				background:
					"linear-gradient( rgba(208,179,148, 0.4), rgba(208,179,148, 0.7) ), url('/pattern1.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				scrollMarginTop: 80
			}}
			className="flex flex-col items-center justify-center p-10 mt-15"
        >   
            <h1 className="text-6xl font-bold text-center">404</h1>
            <h1 className="text-center text-xl">Такой страницы не существует.</h1>
        </div>
    )
}