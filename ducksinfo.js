//drop down selection for type of duck
var typeOfDuck = document.getElementById("typeOfDuck");
//button that makes selected duck appear
var duckBeBorn = document.getElementById("duckBeBorn");
//this text will get replaced using innerHTML with duck selection
var duck = document.getElementById("duck");
//button to feed chosen duck oats
var duckOat = document.getElementById("duckOat");
//button to feed chosen duck grapes
var duckGrape = document.getElementById("duckGrape");
//button to feed chosen duck bread
var duckBread = document.getElementById("duckBread");
//button to fee chosen duck corn
var duckCorn = document.getElementById("duckCorn");
//this text will be replaced by using innerHTML with feeding buttons
var info = document.getElementById("info");

//the Duck Be Born button will do this function after the user clicks the button
duckBeBorn.addEventListener("click", function(){

    //new variable for the user's input of ducks
    var tod = typeOfDuck.value;
    
    
    //if selector is blank error message appears
    if (tod === ""){
        alert("What are you doing? Select a type of duck! You can't birth nothing!");
    }
    //if selctor is Mallard it will show this image 
    else if (tod === "Mallard"){
        info.innerHTML = "Find out what ducks feels about different foods!";
        duck.innerHTML = "<img src='https://lh3.googleusercontent.com/WJ0JWk1zs_egViA94v5ePUsKf73MsvgDYt9I6e5UiaqXGy3QwCWCtGXpeX_GfEw2T5H4D8UJk9vlsIHJGutLWY3-X1eEf6ODGonrkbfDKNDK4U4SPfrZnKHKw9gZtauyBZLyYW1yA_0njB3jNbpO3qwliuueIseVb6cgGMcB4X3dKn7ZHBMuB5DJij_mkk5ctxoP2ZlqyAS47MKyOAkMC6w8Fpb_qU7lnIHod3CG2gAedFtQi-KDDurPF2Q61Uqm-d2D_DpVolpKAh5DyuFnGEerX1FEmHP_hSB83h8Nm7T6YeYjJmNytXlMl4Hzf1YP9kSQ7dtscMU71IZEVVEza6fwGn5qjbg6eLzu96G8vwkXGRlfkYDI91OhRFZjh1WZXQliyEph0rFtqHRihsaLiqjUF5M4eNsCrzaF0MekH7raPoBzLyyHh5-bXkPyZkQOzaNvQL0Pr_Bssy7QHzcRt54kOkw8AQJSd0XwqT-3dPCqYZGrHdiG_5aDyj1BXoqQoDC_avxJCTJCWagG8TKrct4NzuOkUtp464MKwNFDMTXRSJbUa3dLid5yw0FaCDh8KwZoG2X7Ni3WkaMYXzh5nkzlq0oJmP7MUO16CEo7iUecKbdDhBHcFyGsloWHhOHWCqva6kSS5r-R1jSECoY6yV3pTHyMdMpEHw=w737-h635-no' style='height:330px'>";
        
    }
    //if selector is Domestic it will show this image
    else if (tod === "Domestic"){
        info.innerHTML = "Find out what ducks feels about different foods!";
        duck.innerHTML = "<img src='https://lh3.googleusercontent.com/_WgTWTX-5832qTOVT3oVAHxbYONubozR0kqJ3gsn0Eq4bKySHBhWnBtpBidPpG6A9CvdrU-yqMV-oRmMnWJW7c4fY1mmrU0qrjoHM5kefqmHzG91X1iUlrVEnHB0KYppVsAkNFOBIRgXAyjZz9zmTPu5MN1a4B5au6jKNl5tuBFhKK4osugY5f8LwXn2Vv0vF1aBq3gJhuxDZPiJzbY3Om6BIaWIQA2WoQEyK1rcnIth0LZnVNvPastTWdc06szfSelq77zrh-0w2QBOGhJJEW9GnCcKzvAKMPvMQFjPJ30gaGTjSFct-3A2DbaeIrCPpQE1Bdtt497DoA1WMfLDz9Vs5hbtLtoTl5LFIVpf3Up6q9b1YWkp_8750ezpMjLg8PDDZGvT5ezQ_SVV2OaG37e9JpLD_xyOeb0Dk2t4KBDAXrFHkUGoOavURa9vrkekvLgzUAN7v9b5vamXGifQAW2ePeTd5sRjDqCPSrym-MPn2QTt9dof4ZEME8HUzmgc-ni6TzY7jtpBdJfjexLvRBBxpHd0O7W2AZcUeBkxX3wYKw_OO7YL1ixuBlR_l2gqp2veYoiV6H7Lhe6OGXalh0s649xQf16NjtzN-4EXCsa-woG1kBCAmFRre3XTh8Hm3RJVhqZq4xUpBtk9Am1m3-baL6yxi0-80A=w349-h297-no' style= 'height:330px'>";
    }
    //if selector is Marbled it will show this image
    else if (tod === "Marbled"){
        info.innerHTML = "Find out what ducks feels about different foods!";
        duck.innerHTML = "<img src='https://lh3.googleusercontent.com/lzisstwIVbGgjjF6M0w0Yn_C0dTCe4bLI3Nvl-Ubpc5BcecTZwMk122W6lywwdn3LlnxRAKzCwtp2i3sOjIkOv6OwJxZ1s-RHfDb8KFcsYIDX1bDuUICQe_8D_VlXlXqr_VqvXRZnwHuNjGi4wDO1TK7fxU3urAjTjEr0sxcoWKrX2B7k6ac-qFMR5obr01IBDQiW4xch6DFxgJsSbmqfku_MF-dhcXJdhw7EeHd3UH7MBZYh4bvD_iiVSJBRkOY1Jzn8argh18bAER2oObQ_Ov6U2Sxv5pYILs_gS1-EI5tvnugr_mLCezE_aj7UKfv69JPYhQ9vZADXFQPBDZJTvMQLyCVFTSbtdwQBKYZ1A-xeV3t2odEzjFiil081CwyeKni0Vs0WAZHk9KtMnp0TSIwmRLuvFYjdRJ_qc-xWL6aYLFUGsSiGZoGcWF1e2BH-pGJDx9eGbnoBzGywHjiDHCS8DvZFQhl4jyDImGnBetT0RGn6WRU1It5RQuFRcSPjJTtr-vciqgRWBc_GesjNdriaFtuQz99eW9vPNBnAZXuU9tqEalnPjFB7FQwHAnqautIo8ELOpmjwSZ6SP28GEoz-v3hSUTvu7Eudmr7W5NBW378TvROGE4lHPKdk1E-uccm739lH42LmVB_zSUD1gmb7b3bup2Kng=w825-h654-no' style= 'height:300px'>";
    }
    //if selector is Goose?? it will show this image
    else if (tod === "Goose??"){
        info.innerHTML = "What? a goose!? That's not supposed to be here! I mean... you can feed it if you want."
        duck.innerHTML = "<img src= 'https://lh3.googleusercontent.com/5nk0jt64o8uqE56sxug8aE2Lgh9iVoVOYOnMpZwAKrMv6K5a3jgPFH0rUsH9PJ-JHVMsKezTWB5WfooAlX8KUl98DwPpfWqVZXX-KBohXcmiivw8NQw5B8JhMbiGn0J7r4CAL-IG7QEwmcJZ2zVjReXjgnU0GHiFxRB0FcR4Anv-Du9Vw-cov5cnLi5QELx-cHCA64z2zdUtOXdcx6cF_vIzuQZ3pUVzkeswO492V6FDawVHZK0BVCd_pKLkha2QXh42xn4TE9NUCuERoum70UCwD1G_V6859nXlq8K3AUDUkeBdFzGPYrVeuOoAFrxXZevFD_GLPITfgTPFqo5gHcEykTJ0B03zwrvvT4Sy4N3TeTmOTQwht2Nf7Dj9FQg3cmy5g39wU547E6cDspMlyBOG23B9yAEju9uoRHheVWZp2KDQKm-XMRUvobHSX5uRkMMPQN1EzsneDF6xaeyGrZ2N82fwW3oWY7RTTfWpDGw_gDDxziMrjnuqyg31aAzrWaQvcQ1iDJdfEnUGV17P4mtEzPw7U6sU3V-hq4UsdABT2N8UdgRa3AIQKpgghiPxiP-A6hoj4gbf4NbFXXmYnkmFVn3azDKYeTHW5wKN6_qntVoqsQOgrsoTmR6NmXCLVorpvdEp1_4XE4G1ny1fnDhlWDgtusqE-w=w778-h654-no' style='height:330px'>";
    }
});


//button to feed duck oats
duckOat.addEventListener("click", function(){
    //variable for the user's input of ducks
    var tod = typeOfDuck.value;
    
    
    //if selector is blank error message appears
    if (tod === ""){
        alert("You need to select a duck before you can feed it silly!");
    }
    //if the user selects mallard and feeds it oats it will react this way
    else if (tod === "Mallard"){
        info.innerHTML= "mmm! yummy! I like oats! they're nutritious and delicious! Feed me more!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/2mQExd8nmY2vl5kD1CrVpZT-6O9u1Zh9xfer9y51Z7szdE62QZYn33NguhaFz96CyLQWxHagTYFkkC5HaeaY1OrTa7rlueBBLQET7xFIAqmz3JJUfc_OSorbM7r-VEjBVXcx5-3mbo4ziM2i5aCPAq8Htkc0m5-xEDjivojbraPK-yd8M5X8W_82VHzLhgOMRvE7Wiom5mytaTMBj2u8EFwRJ3Rj6wK2uu4WCKwb--XNQYN672w3PdPgilROHi_CZyZIiuz1j1EKkUMAsGquyjN1H5jdAknp1L5-CQaux7FodxO2R5vqm4HvtJTR4xxjbcDGePc0c-WTyfOlQ1RRx4cqu66V3D8Q8BvqSS_r0vOqjRDx5NS945REBaA4rjKj26LP-nR4EarezhqbK3SDl_-YQ8-QtOxI3KLfFNs2cICHSqqly64q1qmmJIjWdINxHvRSN3pDUq1ln9Rf47n4oHpF0r9la0lXCziBDvJ-U4cVNYdrqSjgehQT2v_qRZpFW7QoX6JtsAiX1RCLw-O_Kd2xpxPyGaH5pksC4udLF7Ch5jaXXzUOUfWOp5HCXYOvMEk8OmIYYMy6_CZRpAzbXAkDEYsCIhSmSfaeR9xu4kuYVOrFnz1Y8uYOGkZFA2zTkBuvYQeEtWMzKH8EdR6IJfBIGyDYcSvVKQ=w777-h654-no' style= 'height:330px'>";
    }
    //if the user selects domestic and feeds it oats it will react this way
    else if (tod === "Domestic"){
        info.innerHTML= "Oats make me happy! they're so tasty! I could eat oats all day plus they're so nutritious!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/RRsc_7i0g4JeTrAPuoRMMtc63vXHFMl2suPps08LOvKxTtQxm6lNw9CYFOrMvVUxVe9Gp4BGYO96GORTiUDPwhmIn2iF50DDBmBNNrVGrRDkMNW2VxwIAyxxdPYvOinLX6_LWa1m6ORT1Oycvk1a_XEKVu4yhE7UOzWkCU9ShtAMv1Xh0-4Uh7ar8966h_-Bu9A2DS6GWgNcSGJoftskw91236PDIeydFMTN4ywknAfetgEOdIS8BnIEyBsPd-zeZ7oKMMcoV6K1RX9CUHheb9q95JTQrl3EGr-5jH7EF4NDQaFH0TCOOqW8J5ZvDAIFW8crsEhYdQf1l9Z4QmgW13x6Huaj0HvGvxdzfv-sHQa61eJ5xLNy68xLIsY1rF-GD7wG8_hM9gcYKXiYp0IuNNlIbEEovyhB7UFBOfbgyyhS8G4DLWedHtlCfepQ_kobI6r-WJzvAl8KRx_teH55Rjm-L9yWrrQNTCMj1dS53xGNl8zd4LwzSJbJfpH9R7OT5x3djFUcb5xkGLRosLpTrA3JDSMdBrSQv6-g6-Ap1Gss8weKPCz1dVhZdLXyUdiL6h-w2QZ4EFLz4iS-QkXuyYsLqulzI9IwFCxSFm7ubvfWFlEWu-j1ePhXolVndmlzkwlMdFhAylMDzCvq07x4OzDlKaArJZ_4bA=w812-h654-no' style= 'height: 330px'>";
    }
    //if the user selects marbled and feeds it oats it will react in this way
    else if (tod === "Marbled"){
        info.innerHTML= "yum! I commenly eat oats! they're very tasty!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/F0mY3B9ZuPyc7Vpo6kNGqNgO8SD-GcqZjS_IsBzHJhT2jS6ubaoGFOdu2bIFV6zjUbrJrx4CbB4T80hDZiNd4PLgEG9Iiw8sl23kIPuWTpun2KNiw5zOqp4VO3PnH9GL3T6FgvkKl7FAvCD_zNTqlwyCpJZD0mq2JYzBXpc7wdxeebuCFP0zFMlx5sOCTlAGTDhy_CdHZL2G97jLGMhHzxBv2uN3zNjtGUYO4fVfKgWyKgkctK1T6pFXLp7A6QnL6-OvDzPDWLhFJltWr01jDg43cPEs8puV3OtxfjY3ml-TkrVV_ngGwz5ojmt32OnE0rc1NmqFPd5WCmsMHFwXehm1MdI5T3tNO9eA38bBlaJDS4g4jpnhUABzasJe6mk7ZZvePqXDagLeHPhIgSvn0KvslMgoWsfdo0px__5ALr5XTilYlyrFoKFSNjfZBAjy6tM7RxiF7gdT94p1vFt5SGI70cw7m-XE8MGToGXVoMGbXbXVzZiuIb5JDUKNp7tYYADDvJ0YhLNny4k5AkvdPyusTj_aqgkDlQidXnkYpNql5IaxDSFRpJ5XUzON_y3C3Us930XpUlYo6rWz3yp7dMhlAMDEjlAO1vRPV0bvO3l5Cv8n7tovTT86D7Vnj1pff7f8fHDRue9Kr3wKPi0nAgWwxNNw2tpuqA=w752-h654-no' style= 'height:300px'>";
    }
    //if the user selects goose and feeds it oats it will react this way
    else if (tod === "Goose??"){
        info.innerHTML= "I am not impressed. trying to feed ME, a GOOSE, oats? puh-lease. I wont eat that commoner food.";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/qlDqynvW_jSrhsEG4LW073R9ftBaIPrlBQ8dVj6N23CU2iWx0clE_M53GQPkj-tSKAfPVCds1oj0vASPzYOO22DuQM7N6WnifG4oQogH2ANYAzOgPeNlAPzYmkMMiog8iRAai7QDqQBVGDccF8WFh7YMQpUKQy45pyxdg9KDgGUuAvlxn7BQqrNqZsOsUFnsbGlnuidgJKWq6e6eX7Je9m6Lr3HbR4PNRSvNvybdILNFLL6D0weXcODW66r7VhCyaVXe7GAbkLko7ba2p_3Q9sJ3Ws_GKWO_3AY977d4WcayfQMHwA_7dFwihqG27oQLrojOiWGuXRsAT5frQVDZf1OSJnQijLnIAlYfEZhDNqScxr9lxtGc8W495CCZL9kdnfjnM2W9eL7IpfZv8ihLSDXHKPOM7VObeGTHuKcVnKujUNzVkkVh4cGoe7jttgwe4gJFIVUDwygyyeLizX8qaw66-PczqycHbIFZG-CEPVfiAr8m_bVeVT8CbEW5g9_YjWZtaLAAawHV6pZnJ5Ig03Vtif11cAgDfLVuksEZKN0hGB1_ZWcJXKANGJVbcFPIZmLHnbhVtnJ4bujyBmqWLjd8y4FqFI3cgJAv8D9BweKJXRr9b_aBRpmiGPfse6OX-7J8shSL_hQT-NBeCfxMRA2gcKwclB2qMA=w736-h654-no' style= 'height:330px'>";
    }

    
    
});
    
//button to feed duck grapes
duckGrape.addEventListener("click", function(){
   //variable for the user's input of ducks
    var tod = typeOfDuck.value;
    
    
    //if selector is blank error message appears
    if (tod === ""){
        alert("You need to select a duck before you can feed it silly!");
    }
    //if the user slects mallard and the selects to feed it grapes it will respond this way
    else if (tod === "Mallard"){
        info.innerHTML= "I really love grapes! they're my favorite! And they're good for my duck figure!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/l_879kjp3QFbBxe3nymKB6hPxRBHTpq103gYmy4WmeRIi3I3KwJUbthn3YBAH4E7aAj5R1gDOwBwUkZ9WehQedi80byDaBQxw3HDxSpHVm90hs9LFDZEam02r3jFd-uqli4OsBNahI2w1-ikZlbpiOE3ZGpqybIi10trlFir0usPUnRgcV1uzGnVc2YxsSciw_1imOOghwfa_z4mP2bSMB5ycd4frAinEat543cD8YoXIHirqaie-XXo6PMlJF_QZLsbYrmMf0ShLSmS2Xs6SgRqTQxwwePGcl8Fq12KAGBenNoVVE7Y26KsGezqxY_xzeEiDAG4aTqXRD3y78mv0befmL1zSDWcLq3Ak-6FSZGKu9SoCp2SsQgbl4lO_N5y_Op2ZLLLGybcPlmrsZoPoXRrn4IleEOYlSLGgj6mWqEl93fnmKJhu6t0q2htUjd2YpayrYAzHxotXeewn7EY3a2HJf5wvc099zdOneqvjzA6Nr16hN4WgbzN6EfppuwR6lcS9JjiTdrHpFG7gOyf1CFYAjMXKDYOmJ8KX9g_2Kx_o5A_XdNeX8Qljrn-MDIfvWgPot7q7s2VQstmQe6hMtnCx5Pa0brlII55woLvntBUbFQI-0Nuhx8jsmqZIyd8g2hG2h65Dk3Yn_r7kQjQowmDknmMIcAReA=w761-h613-no' style='height:330px'>";
    }
    //if the user selects domestic and then selects to feed it grapes it will respond in this way
    else if (tod === "Domestic"){
        info.innerHTML= "Wow! I really love grapes! Oh my gosh! I don't think I've ever loved another snack this way! Give them all to me!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/qniP49h27bV7ar1zqcWMsMMOXF91k1tfKyAOVoFUno8S9jlF9PQsbiwt62y37gB37LwmeakV7DdgnYglx3Qjwno4KmatiKjj3KV-O_LOZQVzvRCpeJKxJEiRFfPbW___nIRVj_G9a4JnNYdkF5aO4vifWQFqCYp-_FQ8ha_C0PlFYe8k6FKeTSUXWlSqRaXWYUhpC59u9ivb7jUuECp06jojfEoHzpqUNOeC8yRZ-htQfUNNmTmTPptyug2GAMUQMMfnTQAhIDuq1jyadGT3rgEet6LanBdhs53QcO167hBJmuTms9uMjMbs3SsE8wwhmRhGMXJVyWsIAcNOcgOHFaDYhy1AQzk3tA05WY-T4x11PH_KdRDemD6EsOZggOChVq6BrMUweuDBXBZklSc_QrKSlmu6CWSb1PDKcba44-jSR_hLESt7GPbwVgeKnNCd33Nxv_OBHOKbVu143wdB_DzGPwfbAmfkwYTP0KbDPok7sfK7ty2EcIzQL-h7oH7SmZDvv04EzRezm2IMHMywJVTAC1E3J9WgKcFuGzzrBHerfnkFRNUEoAn9g4muzI97e72DrCD3pyuFfi-Et77BeEZpwVY4TKyy_st69pNUVzTD8Px6TX5NLUZj1a82Yjv9w1bZPPGIQumH17jbFfPJYDM6ni0mqznH1Q=w833-h654-no' style= 'height:300px'>";
    }
    //if the user selects marbled and the slected feed is grapes it will respond in this way
    else if (tod === "Marbled"){
        info.innerHTML= "yum yum! I love grapes a lot they're so sweet and tasty! When you feed me grapes be sure to cut them in half so I don't choke!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/FssVFHeLjt00VllEa6hNfTAUNOjJx9Jioy4PQa7ElM_QOeYeLVWYQZ_o_8Yd3SYESBEWyNyXcPSZdT9ZgBh-myvMwU849kHdPJlnC4AN-Cs18fLbzx41XnJX7TGVVmIQFNu4z708dASRQq30jrGcyJW55H4grcbC4Ij7aeXID7-YEJzNQvqyV2cm5_9o2Bi-9cXfWP8f4z67RAmRgnYWqTs8eyEOEinH5P_uKHvzIh0PY4QnM2c-EIHp3vTKBwuKvNgpzic9weMqfaPgb7BkzDN0-9WS5yt-5Z18GwywRwQHGRJz86tSdSZ_HNPPBO7YVichiG4OSBvQ57bGLL4Lf12U5vsH2lHKBl5X1dELeesHFia1uXbmFC_rZRI0g2DKqwIpd3sSVmQFJpFDhEtBCMDbZh9lYmXjOrjTqZnFkiuAXdYgx4gO02LXrhO96QSd80UQV0guMtl71qKFsRpAmKYWNcgLB8QOt7c2v7EZbySwsIvMHs4_kSGCfX-sXMap5Ol4G6jK3chB3_hMhXkAcDMkgLNjbKDXeCjKlrrF4wAlHdB0ZYWesO8URGqdu698_AgO1JSKuX7QoNe7t_6ToWdoj97WCePVZDN61bsgzQvrOOWKTdLb7Ry9P9kDOFwzbmjzqR7FrTYplmtKtTiPJowpaD_ETADnVw=w668-h629-no' style='height:300px'>";
    }
    //if the user selects goose and then selects to feed it grapes it will respond in this way
    else if (tod === "Goose??"){
        info.innerHTML= "Hey! you're not so bad human. These grapes fit my presice goose palate";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/DnY938Ai9FhdfaqmSHVNmS1EzZXOwyCCFwo-LSkxJKI4xdoKBhZRQTOMXIDMQEhtobeMyVw5Df7ZM4fCskog8myb0mItotR5wMG5AIH31W1Q4fArh56054W6GeNtdN6tvvugdc3eHFO7GwxLeSI6h4pSQYEMIaZ41uyswii3OKikot5SYIS720aGdZ-32cRKU0LYaUY3uYi3l_CsGuc6hYlzE3P3CVey3BYw68wkv1d4e-8j6FYG8xaRshyHTxHZ8LvYh8TDTB-XWgWE7RqjK49-HNPaa8i7ybsA1Fuxv4Ip9YqiZS8mw2NcKnjmbVMvUxTqxYUFfWhuZRf_YqQ0Z3kbiDf6piBosjhB9I8pWyb1aQ40CplJEjYWeWAj521rLwy3HUqEmVvYEc0En98sECm3RKPY8sVQYRwYMd40d6ybXF-iC8HYC3Um2C9w9Ks2mFnjilR87bnT2_TuoISlfTu0gtD_96jcxeawpP6pR-w3jpgtC6DL9oGXLA4Ggj8YgAFsUlVfq_lYuCjYWa7hsXZTP-6AluBzgPoVjFm5e8Je5AhMapPazbNkI4KmDhSS3g9d3MQpG0C2js2OKT10vpfl7xir7z5Zlu2E014oesh0ff1FGh-6ExXkeUfETJazIKzmd3H65FPNCrl8qOP6L1CjejvadooxXw=w839-h654-no' style= 'height:330px'>";
    }
});


//button to feed duck bread
duckBread.addEventListener("click", function(){
   //variable for the user's input of ducks
    var tod = typeOfDuck.value;
    
    
    //if selector is blank error message appears
    if (tod === ""){
        alert("You need to select a duck before you can feed it silly!");
    }
    //if the user selects mallard and then bread it will show this on the screen
    else if (tod === "Mallard"){
        info.innerHTML= "Bread sure is yummy, but it makes me misbehaved. tch, I don't gotta listen to what you say!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/-hND9ASmKaKYELi2-SgeggpD2WMeJSVEr7CdF8G7MBECb4LOPGsWseV5XhU-XU9Dft9tLsOnbk25ZvUcSdh6Y64GxsKejt6y4UCBDkttI1BCOqh25AqNEN1iiKcJCIWAMK-mqEtan9XVoCGGkRkajv4UNABWdIJcdG2feb9y8H2DYluEhDGEi2EKjuNmavPiaNoPXWdWWk5zI9YZOf6fwbdhxoUq-Mx2evvYsj-_9ihYUAxWX7_ApW2ToryfP2jRcOtl5nGBHBRVOhkHkYuRX4OSYWWGb8MIFTUZMu3sPW9WW8bYnnAbiovCGcV1CWhef_UmgAqBXzILjW5Q3yL3MKR_MP34Lfn2LCvMVeINKG7QmrQ8Os46bkqR3XRHCO9DAOdMh73nZ_QWI15gXDy5jjBJJixvD01j7bfWWkuYcdysZeG1W3jqoVe8LAvQcnbklFBaHmXMB8ZdG5jwEDpm2suWXLpyb1lQPpJSofWj-aoeGrO2K2pChNuZoiGqFcLd6Wk_IMfNuGdbV5W0_gSM2ZDo3VC9nOZUmcDhNPEGqH2ZNTQmku4gg-uYQwZHR-6Pja8bpX4Yfu-QedlgCYTKorQcCjEgcABn0LPamdM4mTT2Y6Zr67KlOHPj7FpWlY5-CybxpMi2wXnaop1j5ayn4JF82lFCyv-rsg=w685-h654-no' style='height:330px'>";
    }
    //if the user selects domestic and then bread it will show this on the screen
    else if (tod === "Domestic"){
        info.innerHTML= "That bread was tasty but it doesn't make me feel that great at all! I think there are better options to feed me...";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/3L7TpTnPwgp61TInjYMTJueTIBAQlzsYDbDIZ3MG7wYQpz8TMW5C8BQ-ZhD3a5wf5anRuZ7XFQlWgeDhFDnelW9g7rjc8bbMy2IAe-wgEQDFxKvZFXKJoI-6sFsOYd4B9bscS_ekJkQ5KUUkA_tL_ftCXPBQHl-4KSLwMi5rCjYsTmHNLhorT4tz9x2gFYK5Nx-8rLMl8UsBKwFILmk7yQY3UqmD_kkE1CIC01AUAg4nDCsgldiuOn2gA3LIBZuIpUxbLpcBDtWUuI3dgVbmEPNUbyeFWeHzLDWWprvY5TY-iiXJF4BqQtPVtu7Tc7ae6OqfqESGA8qQdIuFak-a4uxUmC9AI0sUQITWY8nERcM7tUqzjfMOncZS-i5xSXdOE85ekt2NPYKaIs4z-BMRm29TQEYZQdJveORfpcIQqN7BYQuPeUY0lrPaaKygPRg8rpwwUss55VEYwhyIAjuEz8Fj7a5fNU_0-LKMgaY0uyAKLT3jI8F_CdeiWUKoXZLusCaLPsQMOeg8qILhXOZIFc_y8Yric4fEb2XrNz3yX3LIdh9XuuZ9ajGujjpEeGpylJyQ--YXGFc5qb8jMhXUlEQR11ws_WPHKWeap2uFTi_4ly3uTVhyEzqFe3hte9fmhaoMyC_0hSMsDkuHChU0YBsOXtYgOcywVQ=w782-h654-no' style= 'height:330px'>";
    }
    //if the user selects marbled and then bread it will show this on the screen
    else if (tod === "Marbled"){
        info.innerHTML= "I'll eat all the bread you give me. But it ruins my duck figure and is not very good for me.";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/BrHK8fRqX1Akw2G8W6P1HJ5qzMBfe9JGCNDBVzb0val4IZSFNRU7oAWkRwztTjQzOf64q1m9GuPSdE8YG9AHCZEarAhWWE8_SUPR7S3nGnI8rvZ-kjGwdBs6BMgNyomy7GhqzLXuxNtJmWX8cjaCchB8FwCoD3uuVDTkUjweuIGmTNvXxLI0jktH1eFjB6rZMTo_ewU8vtz32Jg3Ug4lGWiCL1Ap3nNEUjg0ehnICASAWGnDNjBwZhnuefFR-edzUGRdQBI80SIW6vK8Nl08RiDAb6BLUbySqxaTwSvqjScWTH9oyHCl6yLEfqRxfWd69axYoRd-ny60xyceYOehTTTiI_uBhT3KRyf8whepAt-T3ayg4y9oW9PI_KRIekXJiuqBi7k9DjEgZIUtlSHB7sb6nhGI8Ctjqi8PVX00xD1gG4c8r6xzNTocmZgfBuyYk7_Q0TJgvL04FuZqCyz7lvyfq3pmyIaOPPgIviEr_FKBShJH7upMXv_2KgU7E0jX0-9HPdd0rcUlqFRH8hiT95jgq0oX3G0n_ErloYcKFXsCRtHUus051QRYxy40pNflxKCQWBD-ekMIdJxEiG4KfmJm0yd8-AkTDk8VGuA2d6rn9YlioKw6wZmNUtYGTVNZ_-mL0hZ1etoDxCYlLdLRn-7oNCY37iDyqw=w664-h629-no' style='height:330px'>";
    }
    //if the user selects goose and then bread it will show this on ythe screen
    else if (tod === "Goose??"){
        info.innerHTML= "Excuse me? Are you trying to feed me bread? I do not accpet. Feed me something that is worth my time human.";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/kMGLcsFCLJF6SitPIFgL3IugmvsKbQzE_V3wCAamdIBxYeZTU5mDz-yeTXUDZKQR7fgPVCu5oDRoroQ8QHcQP4g7bg2na_P8Mb5X3gqyxmKGfdlvsFjOkoe7Kel74_NeGXFdVtaDjHMHfNguTWmF8YHwJg0Z0wl5QlUQhz3R2tLGbVjd7_nijP_23oxSipFGBMUpUPrZCzbwUumEJYdRa7lxEMSLiyLczBF8In2uTM8z-BEMMc1RXN-EQ8aYQkSe4Bg127H4wuDVfUcvkCAatcReP7gTeqASSWR7oavueFSn79wulsPF0V42deaLkWckyMLIYkDyKqhfgw1Wt-K_gSH4koGu_Yh_craLxRizE7rjBEPeDnzGWc0GPBlCWjITVqBs-NTTAWzzIZAKqcToHHLHi-V_KBQ4RvVxjJibrQT0Ocvd-Barro-hSmnNT1NKdrsywpiFeREvMs8H2BBk_2_zJiR2ymE_ocI65YeBsQ0m2bTvOJlpup2o51D8kFVPWpAfiN2EYvuWu0W0OlrjXowiNou8rpmh2O8PJqU4D3YsQ4x7HafTiyWWE210BMWYO_jDChW8jCT8EzsFN_PykEOaVtoCglJpiLQSC73L5yv0VF8ShApQkA9nX2VK6Eecd5e-Aq92CyJdhpb2RPLoWILv1eu87CbZ4A=w824-h654-no' style= 'height:330px'>";
    }
});

//button to feed duck corn
duckCorn.addEventListener("click", function(){
    //variable for the user's input of ducks
    var tod = typeOfDuck.value;
    
    
    //if selector is blank error message appears
    if (tod === ""){
        alert("You need to select a duck before you can feed it silly!");
    }
    //if the user selects mallard and then feeds it corn it will react in this way
    else if (tod === "Mallard"){
        info.innerHTML= "Wow! I've never tried corn before! It's quite tasty! yummy yummy!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/mo8leoLRocC9NURCGpBcmzSChhwvrAgYNf6CvBElbQocmI3ktPzYON7gRrepQ2Zm4377qxVI3zaUXZ_meWXou5zZcbIEKyvBY-yTs4xZKgZsrOfcZA_CKVOnTdtxnyAFyIEdQXLajHK622UIvvfmDEzjmfErr2YK4hMxUMLmlabJ9c6h5nK0cytscG0rSry0yyMTIFbuBPBaDby8SFaoaHZx4eE95AEys7J-prsCJTMen_GSrWNpvvKQamf-dSUS2GpBza1kHI5GokrUFrxuOC0DOcEBfywT9gJMeu5x78bIjEB9iBFusC61XxLYn_J4BCge7eXvvouincRXYTezWvax-vqPhTi3QhHqQeEsdHz6yia120NS0HYKqZvH1nR2mmDcXWB11sRn0ZTG6IbVF488okUaDit9Vf9IFlyJQP9NjNgxdOJdpvE000nkPmQvlJGqjqQbL3_H1TUSNISHxJqgd974snReLEKBAmIGgDwWRPMT-FfgL0DQmx3zT-ySaH_5wo0MATZtQNvzvU9JhLfKa_sLnIFVrwvEwUkDIb8kE9CqZTlbIkRnmu4mVudfcHp_ePTdCCWQ-2kfcVe9SFz22V4K0Mwm5HhXv_K0zXO8I1mhTA7T3kSSeGi34JIPeFTeq0hYJiNvkSqvmAdYGfddJZwA_5U7yA=w674-h654-no' style='height:340px'>";
    }
    //if the user selects domestic and then feeds it corn it will react this way
    else if (tod === "Domestic"){
        info.innerHTML= "Mmm! So sweet and crunchy this is delicious! Feed me more!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/aZ_RcrabdGlvQ3aBlcNSS5HYCXDtqqdjvLZfFHybgAtgM-RDX5HuvBsPKMDl6UbXtKhoMDOhtSYJQsdM6u9hIVkkWqdbh2pae_y6_oL24tBwrzsaLBpmlbvsHG7YiacNYBqIjlryB0Cv3wKi8JvHuH7X_kv-5SM5EfWizb0DfeN7sqqR_Ap0rmiyHJFkqY61YMjWwxYwr8Wt150VSekI4yBe016EEchM9G6ELdCE9IXtEaGng6uVdg5684SusPvDPD0ZeB3UTKYAUoygnwI0zdFrXKZmTcQzWptDySLj_o_fOGan79wad5KboZIUTMF2HrcIl7jhO2Y7iNmLgi-QuaupHT8ImiONvdWGivzdoAgU8GkgQMby1Nm3vF5hBYVZkKwHFRI16OnW7NgFk2Px5y7tRGZpXcN8YZC4gPCA4PQ3q0bAgjBKwQloOXAr8P-yQOPIxTIEE8IndeguHxh1bok3T5qz0lct8xih0FdIRcU_tZlPIlmcGcww6y6caZbND94ARHZeDuJnyryKEahUSbyL_4nvDeBT0WB1OnaGBK2TbUf-RvzKrh2EwCAVI_aveT7tEJgAkGCutqpzlg8J6TG8daPlCedJZzaajD5bk5r5OfQqlzu57Z33ZRRYFwqyVzfnwj8gQn-M75o0tlWInPFxMvsZ1eutdA=w861-h654-no' style= 'height:330px'>";
    }
    //if the user selects marbled and then feeds it corn it will react in this way 
    else if (tod === "Marbled"){
        info.innerHTML= "Yummy, yummy! Corn is my favorite snack I could eat it all day! It's good for me too!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/u_QYkBhJLDvq7FcH8BP3QrHE2UvToaeEAlg4iHeseRifn1JHJYxidWYwHgborxu-WAVxowPny8PQ1noFWgqxXr91nkRRJb-nlstYoMGYpmSkkYPgMBDu88TzgA3lLrjrauN5DBc8WIv4BB1-ZFYqWyGvkDwnWhByWosQ-VZ3Ww0x5Bp5mC8912OZqCUKGmRgA_7p41JiFJPvLY6dMveiokdolSKEqZKXCW1rHLGOe6YtLrqCeVXIyIYxZWGrqENZZPGotGwMdDUxOljLwHmw6nSAsQ2W3aVlb2_sgkXMfN1l8RxNRdkavovkJ2jZUAew3_GznwLITSivFuFxaN1oMSvg2QvxrGIMMpwfHxUc7FcpyeV0V4WonryInBD-3b7rZXdfif4f81hNmVe44j0lg4_Rnk-bFhBktIhYVTuhGCU9O5CtD2wpa7HqmJgbAJxQy0iX6qNgcOxxZAgTRD03Wg8e4ZhNl4eMlvavo553qKwN0D_H47bE4EaOngIGgtnzJjxrEeygG3iDT2PyiRqrfIEbXr00WDsj1y-JByAlNSGc4GLIdjm9kb2v_amFe_VxwjsDhHbY07hb9HW7wOM_2XbM7fchl1JDXehtP4pwN9zqoE5FYaVBL89q0UzUwsiVuNDyzgCJxAf7lJGXt1eSlrtReZJ4XDVJgA=w662-h654-no' style='height:320px'>";
    }
    //if the user selects goose and then feeds it corn it will react in this way 
    else if (tod === "Goose??"){
        info.innerHTML= "Finally something that is truely worth my time! You really understand me human! I love you!";
        duck.innerHTML= "<img src = 'https://lh3.googleusercontent.com/oWbBs0honmc2MfCVuqmIXTyWMNZZpQCE1lqF5TB15Z_7UBv_ywpDBmsewmWMGrB7MQgyvQSCLSaydhU7zCBAY6m03Gt3E3bVWtRHozcQdGUWO_6R9zMRmN3FZFFFLB5D7bLF6LlvMdZn3nry9fYCyTCg42K27O2j2TrcgQ2eJ9SI7PYMFJKng6jbVrRbFIkjhIV3KikXC_lq7ZbY_D3D6cNI-hG_qRspWmfF9aMNLrUpwcWDdHNFebf082mG7hYMQ5NJx4LAzmEzIXm97YiznEt2TtstVu0ctPGwsRDR5DJawK0k-sWKN1Uq40WIdbf6teyyQsBU2EsM_U04Kn3SEbpM90d_9PfG53sk5u3TcPzsKvA_CDX5Hc-hNs2Vbg0Sr-sqQp3tcv_t9AheOkwnoyXzryBxsMWh31Y9__Rv6iLqBRDzwTOBETHrU5rAB0WC6yGsX3WOKh-RfZVw68LtqOA-Ar8K30HLh7WyN2CGptjKCACPBH6-GJrM4m_NY1FWBdtUbmKP9g-Zv15gApUrifL1LEl7wgLVrMdG0Lx_lcBPCRmhiSTBUsTf1P1N7t8DC3m1K1Sj2-WMYHe76I7R0BCBaNwkk3mWVS-uFdOI6RBf4bsNJOH9100rnpI8C8lGe9KB7n3ug8eTX4ICc09-X8pPpRGUOrQT0A=w759-h654-no' style='height:330px'>";
    }
});