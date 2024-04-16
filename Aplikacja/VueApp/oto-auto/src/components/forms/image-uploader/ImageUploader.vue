<template>
    <div class="image-uploader-wrapper">
            <div
                 v-if="offerImagesData.length == 0" 
                class="image-drop-zone"
                @dragover.prevent
                @dragenter.prevent
                @dragstart.prevent
                @drop.prevent="handleFileChange($event.dataTransfer)">
            <div class="button">
                <input
                    type="file"
                    id="fileDropRef"
                    @change="handleFileChange($event.target)"
                    multiple 
                />
                <label htmlFor="fileDropRef">Dodaj zdjęcia</label>

                <h4>lub upuść pliki tutaj</h4>
            </div>
        
            <div class="info-label">
                <h6>Dodaj do 40 zdjęć w formatach jpg, png lub gif</h6>
            </div> 
        </div>
        <div
            v-if="offerImagesData.length > 0" 
            class="not-empty-image-list"
            @dragover.prevent
            @dragenter.prevent
            @dragstart.prevent
            @drop.prevent="handleFileChange($event.dataTransfer)">
                <ol>
                    <li :key="index" v-for="(image, index) in offerImagesData">
                        <div :class="{ 'main-image-container': index === 0, 'image-container': index !== 0 }">
                            <img 
                                class="uploaded-car-pic"
                                :src="image"
                                alt="car"
                            ></img>
                        </div>
                    </li>
                    <li>
                        <div class="upload-file-button" ref={dropButton}>
                            <input
                                type="file"
                                id="fileDropListRef"
                                @change="handleFileChange($event.target)"
                                multiple
                            />
                            <label htmlFor="fileDropListRef">+</label>
                        </div>
                    </li>
                </ol>
            </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'imageUploader',
        setup() {
            const offerImagesData = ref<string[]>([])

            const handleFileChange = (event: any) => {
                const file: FileList = event.files;
                importNewImages(file)
            }

            const importNewImages = (files: FileList) => {
                Array.from(files).forEach((file: File) => {
                    if (!determineMimeTypeIsImage(file)) {
                        return; //TODO WYŚWIETL KOMUNIKAT 
                    }
                    
                    const reader = new FileReader()
                    reader.readAsDataURL(file)

                    reader.onload = (_event) => {
                        if (reader.result) {
                            // addImagesToForm(file, reader.result.toString());
                            offerImagesData.value.push(reader.result!.toString())
                        }     
                    }
                })
            }

            const determineMimeTypeIsImage = (file: File): boolean => {
                if (file.type.match(/image\/*/) == null) {
                // this.message = "Only images are supported.";
                return false; 
                }
                return true;
            }


            return { offerImagesData, handleFileChange }
        },
    })
</script>

<style lang="scss" scoped>
    .image-uploader-wrapper {
        width: 100%;
        height: fit-content;
        background-color: var(--main-200);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0px 0px 1px var(--main-900);

        .image-drop-zone {
            padding-top: 20px;
            width: 100%;
            height: 300px;
            text-align: center;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .button {
                display: flex;
            }

            input {
                opacity: 0;
                position: absolute;
            }

            label {
                display: flex;
                width: 190px;
                height: 50px;
                background-color: var(--main-500);
                color: var(--main-100);
                text-align: center;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                font-size: 1.2em;
                margin-right: 20px;
                border-radius: 5px;
            }
        }

        .not-empty-image-list {
            width: 100%;
            height: fit-content;
            padding: 15px;

            .upload-file-button label {
                width: 9vw;
                height: 14vh;
                background-color: var(--main-500);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                font-size: 2em;
                font-weight: bold;
            }

            ol {
                padding: 0;
                margin: 0;
                list-style: none;
                width: 100%;
                height: fit-content;
                display: grid;
                gap: 2vh;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: auto auto;
            }

            .image-container .uploaded-car-pic {
                width: 9vw;
                height: 14vh;
                object-fit: cover;
                border-radius: 5px;
                -webkit-user-drag: none;
                grid-column: span 1 !important;
                grid-row: span 1 !important;
            }

            .main-image-container .uploaded-car-pic {
                width: 19vw;
                height: 29vh;
                grid-column: span 2;
                grid-row: span 2;
                object-fit: cover;
                border-radius: 5px;
                -webkit-user-drag: none;
            }

            label { 
                display: flex;
                width: 190px;
                height: 50px;
                background-color: var(--main-500);
                color: var(--main-100);
                text-align: center;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                font-size: 1.2em;
                margin-right: 20px;
                border-radius: 5px;
            }

            .button {
                display: flex;
            }

            .upload-file-button input {
                opacity: 0;
                position: absolute;
            }
        }
    }
</style>