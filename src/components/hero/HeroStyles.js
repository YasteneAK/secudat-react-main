.hero {
    width: 100%;
    height: 100vh;
    background: url('../../assets/cyber-bg.png') no-repeat center center/cover;
}

.hero .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.hero .content {
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin-left: 6rem;
}

.hero h1 {
    color: #f8f8f8;
}

.hero .blue {
    color: var(--primary-color);
}

@media screen and (max-width:940px) {
   .hero .content {
    margin-left: 1rem;
   } 
}




