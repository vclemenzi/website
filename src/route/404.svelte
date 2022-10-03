<main>
    <div>
        <h1>Oops! I think you are lost!</h1>
        <p>Sorry, but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.</p>
        <button on:click={() => {
            window.location.href = "/";
        }}>Go to the safe zone</button>
    </div>
</main>

<style>
    * {
        color: rgb(230, 216, 216);
        font-family: "Roboto", sans-serif;
    }

    main {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: swipe 1s ease-out;
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 1rem;
    }

    button {
        background-color: #ff9900;
        border: 1px solid #ff9900;
        border-radius: 0.25rem;
        color: #11111b;
        cursor: pointer;
        display: inline-block;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 0.375rem 0.75rem;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        user-select: none;
        white-space: nowrap;
        filter: drop-shadow(0 0 0.5em #ff9900);
    }

    @keyframes swipe {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }
</style>