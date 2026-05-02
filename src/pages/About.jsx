function About() {
    return (
        <div style={{ padding: "40px 32px", flex: 1 }}>
            <h2
                style={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    marginBottom: "16px",
                }}
            >
                About This App
            </h2>
            <p
                style={{
                    color: "#c0b0e0",
                    lineHeight: "1.8",
                    maxWidth: "600px",
                }}
            >
                This Student Directory App was built as part of the React
                Fundamentals assessment. It demonstrates core React concepts
                including components, props, state management with useState,
                side effects with useEffect, conditional rendering, list
                rendering with map(), and client-side routing with React Router.
            </p>
        </div>
    );
}

export default About;
