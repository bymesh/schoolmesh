# Dependecies
1. svelte-i18n
2. Spartan Google Font
3. Material Icons
4. TailwindCSS
5. svelte-notifications
6. firebase

# Potential security concerns
`components/ui/toast.svelte` uses @html to render html in the notifications, could result in xss