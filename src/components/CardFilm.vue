<template>
    <div class="card-film">
        <div class="card-img">
            <span class="card-play"><font-awesome-icon icon="fa-solid fa-play" /></span>
            <span class="card-tag">{{ tag }}</span>
            <img :src="src" :alt="alt">
        </div>
        <div class="card-title">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        src: String,
        alt: String,
        tag: String,
    }
}
</script>
<style scoped lang="scss">
    .card-film{
        // min-width: 150px;
        max-width: 210px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin: 8px;
        transition: .5s;
        cursor: pointer;
        .card-img{
            // background: red;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .5s;
            img{
                min-width: 100px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .card-play{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                color: var(--primary);
                opacity: 0;
                transform: scale(0);
                transition: .5s;
                background: rgba(128, 128, 128, 0.281);
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            .card-tag{
                position: absolute;
                top: 0;
                left: 0;
                text-overflow: ellipsis;
                text-align: center;
                overflow: hidden;
                white-space: nowrap;
                margin: 8px;
                min-width: 50%;
                max-width: 90%;
                background: #7ff0c188;
                border-radius: 20px;
                padding: 0 16px;
            }
        }
        .card-title{
            background-color: #060707;
            color: #fff;
            width: 100%;
            min-height: 5rem;
            text-align: center;
            padding: 0 16px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-inline-box;
            -webkit-line-clamp: 2;
                    line-clamp: 2; 
            -webkit-box-orient: vertical;

        }

        &:hover{
            // transform: translateY(-2px);
            color: var(--primary);
            box-shadow: 3px 10px 15px -3px rgba(0,0,0,0.1);        

            .card-img{
                transform: scale(1.02);
                .card-play{
                    opacity: .8;
                    transform: scale(1);
                }
            }
        }
    }
</style>