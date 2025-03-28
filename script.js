const loginBtn = document.querySelector(".login-button");

loginBtn.addEventListener("click", async (event) => {
    await get();
})

async function get() {
    const url = "https://test-server-ashy-xi.vercel.app/test";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch(error) {
        console.error(error);
    }
}