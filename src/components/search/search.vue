<template>
    <div>
        <!-- Trigger button -->
        <button @click="open" class="search-button" aria-controls="search-overlay" aria-expanded="isOpen">
            <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
          
        </button>

        <!-- Overlay -->
        <transition appear>
            <div v-if="isOpen" id="search-overlay" class="overlay" @keyup.esc="close">
                <div ref="backdrop" class="backdrop" @click="close"></div>
                <div ref="card" class="card" role="dialog" aria-modal="true">
                    <button @click="close" class="close-button" aria-label="Close search">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>

                    <div class="search-area">
                        <div class="search-icon-container">
                            <svg class="large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <input id="big-search" v-model="query" @keydown.enter.prevent="submit" ref="input" type="search"
                            placeholder="Search for projects, docs, people..." class="search-input" autofocus />

                        <div class="button-group">
                            <button @click="submit" class="primary-btn">Search</button>
                            <button id="close-btn" @click="close" class="secondary-btn">ປິດ</button>
                        </div>
                    </div>

                    <div class="suggestions">
                        <button class="tag">ຜະລິດຕະພັນ ແລະ ການບໍລິການ<i class="fa-solid fa-arrow-right"></i></button>
                        <button class="tag">ຂ່າວ ແລະ ກິດຈະກຳ<i class="fa-solid fa-arrow-right"></i></button>
                        <button class="tag">ກ່ຽວກັບພວກເຮົາ<i class="fa-solid fa-arrow-right"></i></button>
                        <button class="tag">ຕິດຕໍ່ພວກເຮົາ<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'

export default {
    name: 'SearchOverlay',
    setup() {
        const isOpen = ref(false)
        const query = ref('')
        const backdrop = ref(null)
        const card = ref(null)
        const input = ref(null)

        const open = async () => {
            isOpen.value = true
            await nextTick()
            gsap.killTweensOf([backdrop.value, card.value])
            gsap.fromTo(backdrop.value, { opacity: 0 }, { opacity: 1, duration: 0.35 })
            gsap.fromTo(card.value, { y: 30, scale: 0.98, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' })
            gsap.fromTo(card.value.querySelectorAll('button, input'), { y: 6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.03, delay: 0.08 })
            setTimeout(() => input.value?.focus(), 220)
        }

        const close = () => {
            gsap.to(card.value, { y: 12, scale: 0.98, opacity: 0, duration: 0.28, ease: 'power2.in' })
            gsap.to(backdrop.value, { opacity: 0, duration: 0.28 })
            setTimeout(() => {
                isOpen.value = false
                query.value = ''
            }, 280)
        }

        const submit = () => {
            console.log('Search submit:', query.value)
            close()
        }

        const onKey = (e) => {
            if (e.key === 'Escape' && isOpen.value) close()
        }

        onMounted(() => window.addEventListener('keydown', onKey))
        onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

        return { isOpen, query, open, close, submit, backdrop, card, input }
    }
}
</script>

<style scoped>
#close-btn{
        font-family: "Noto Sans Lao", sans-serif;
}
.search-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 22px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgb(0, 118, 235), #0004ff);
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.search-button:hover {
    transform: scale(1.05);
}

.icon {
    width: 20px;
    height: 20px;
}

.overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 24px;
}

.backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
}

.card {
    position: relative;
    width: 100%;
    max-width: 720px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
}

.close-button:hover {
    transform: scale(1.1);
}

.search-area {
    display: flex;
    align-items: center;
    gap: 16px;
}

.search-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: #eef2ff;
}

.large-icon {
    width: 28px;
    height: 28px;
    color: #6366f1;
}

.search-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1.2rem;
    color: #111827;
}

.button-group {
    display: flex;
    gap: 10px;
}

.primary-btn {
    padding: 10px 16px;
    border: none;
    border-radius: 10px;
    background: #0004ff;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
}

.primary-btn:hover {
    opacity: 0.9;
}

.secondary-btn {
    padding: 10px 16px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background: white;
    color: #374151;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.secondary-btn:hover {
    background: #f3f4f6;
}
.suggestions i{
    padding-left: 5px;
}
.suggestions button{
     font-family: "Noto Sans Lao", sans-serif;
    
}
.suggestions {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid #d1d5db;
    background: white;
    font-size: 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
}

.tag:hover {
    background: #f9fafb;
}
</style>
