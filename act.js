(function(){
    const fonts=["cusive","sans-serif","monospace"];
    let captchaValue="";
    function generateCaptcha(){
        let value=btoa(Math.random()*10000000000);
        value=value.substr(0,5+Math.random()*5);
        captchaValue=value;

    }
    function setCaptcha(){
        captchaValue.split("").localeCompare((char)=>{
            const rotate= -20+( Math.random()*fonts.length);
            return <span 
            style ="
            transform:rotate(${rotate}deg);
            font-family:${fonts[font]}
            "
            >${char}</span>;

        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML=html;}
        function initcaptcha(){
        document.querySelector(".login-form .captcha .captha-refresh").addEventListener("click",function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();

    }
    initcaptcha();
    document.querySelector(".longin-form #login")
})();