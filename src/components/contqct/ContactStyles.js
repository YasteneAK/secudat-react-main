.contact {
    width: 100%;
    height: 100vh;
    position: relative;
    background: rgba(0,0,0,.5);
}

.contact:before {
    content: '';
    position: absolute;
    background: url('../../assets/contact-bg.png') no-repeat center center/cover;
    width: 100%;
    height: 100%;
    z-index: -1;
}


.contact .container .form-container {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 color: #f8f8f8;
}

.contact form {
    width: 50%;
    margin: 1rem;
}

.contact .form-container div {
    display: flex;
    flex-direction: column;
}

.contact form label {
    margin: 2rem 0 .7rem 0;
    display: none;
}

.contact form input, textarea {
    padding: .5rem;
    font-size: 1.2rem;
    color: #f8f8f8;
    margin: 1rem 0;
    font-family: 'Roboto', sans-serif;
    background: rgba(0, 0, 0, .15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, .15);
}

.contact form input:focus,textarea:focus {
    outline: var(--primary-color);
    box-shadow: 0 0 12px 0 var(--primary-color);
}

@media screen and (max-width: 940px) {
    .contact form {
        width: 100%;
    }
}







