<template>
    <div class="main-memu grid wide">
        <div class="row">
            <RouterLink to="/" class="logo l-3 m-3">Khanh Duy</RouterLink>
            <nav class="main-nav l-9 m-9">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/game">Game</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main-memu {
        background: #a8f1f773;
    }
</style>
