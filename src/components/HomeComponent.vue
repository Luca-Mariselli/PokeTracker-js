<template>
    <div class="text-align-center my-home-bg">
        <div class="my-cover h-100">
            <div class="my-home-box">
                <img src="../data/img/logo.png" alt="">
                <div class="my-subtitle">
                    Find Pokémon TCG cards <br>
                    and track your collection now!
                </div>
                <div class="d-flex justify-content-center w-100 pt-5">
                    <a class="my-btn-sets mx-3" href="/sets">Browse Sets</a>
                    <a class="my-btn-collection mx-3" href="/collection">My Collection</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-home-bg {
    background: url(https://www.artofpkm.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdDlYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--78752ba7f2b47363b2aeaf736df3aa8115369f41/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0MwQWRwQXRBSE9neHhkV0ZzYVhSNWFXUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--ed2d6d11a2959980a13c5ee4344539bfee99a0a7/378929191_816660970004164_8289223057963330352_n.jpg) center;
    height: calc(100vh - 56px);
}

.my-cover {
    background-color: rgba(0, 0, 0, 0.624);
    display: flex;
    justify-content: center;
    align-items: top;
    padding: 3rem;

}

.my-home-box {
    background-color: #000000d3;
    display: inline-block;
    border-radius: 40px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 430px;

    img {
        width: 70%;
    }

}

.my-subtitle {
    padding-top: 3rem;
    display: inline-block;
    font-size: 30px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
}

.my-btn-sets {
    background-color: #FFFF00;
    padding: 1rem;
    border-radius: 25px;
    font-weight: bold;
}

.my-btn-collection {
    background-color: #375da9;
    padding: 1rem;
    border-radius: 25px;
    color: white;
    font-weight: bold;
}

.my-btn-collection:hover,
.my-btn-sets:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
</style>