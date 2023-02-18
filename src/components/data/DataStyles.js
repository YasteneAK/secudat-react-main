.data {
    width: 100%;
    height: 100vh;
    position: relative;
    background: rgba(0, 0, 0, .1);
}

.data:before {
    content: '';
    position: absolute;
    background: url('../../assets/data-bg.png')no-repeat center center/cover;
    height: 100%;
    width: 100%;
    z-index: -1;
}

.data .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 30%;
    width: 50%;
}

.data .content p {
    margin: 1rem 0;
}

@media screen and (max-width: 940px) {
    .data .content {
        left: 0;
        width: 100%;
        padding: 1rem;
        background: rgba(255, 255, 255, .7);
    }
}









