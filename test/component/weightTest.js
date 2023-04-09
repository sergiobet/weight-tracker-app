describe('New Arrivals Component Test', function() { 
    it('checks if the component has been mounted', async (browser) => { 
        const component = await browser.mountVueComponent('/src/components/Weight.vue', { 
            plugins: { router: '/src/lib/router.js' } })
             expect(component).to.be.present; }); });