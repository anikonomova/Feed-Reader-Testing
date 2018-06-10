$(function() {
   
    describe('RSS Feeds', function() {
        // tests if the allFeeds variable has been defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // tests if the URL is defined and not empty.
         it ('has a defined URL', function () {
           allFeeds.forEach(function(allFeeds) {
           expect(allFeeds.url).toBeDefined();
           expect(allFeeds.url.length).not.toBe(0);
         })
       });


        // tests if it has a name defined and that the name is not empty.
        
         it ('has a defined name', function () {
           allFeeds.forEach(function(allFeeds) {
           expect(allFeeds.name).toBeDefined();
           expect(allFeeds.name.length).not.toBe(0);
         })
    });
});

    describe ('The menu', function () {


        // tests if the menu element is hidden by default
        
         it ('is hidden by default', function () {
           expect($('body').hasClass("menu-hidden")).toBe(true);
         });

         // tests if the menu changes visibility when the menu icon is clicked
        
          it ('changes visibility when clicked on menu icon', function () {
            let menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
       });

    
    describe('Initial Entries', function () {


        /* tests if when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
         beforeEach(function(done) {
           loadFeed(0, function () {
             done();
           });
           });

         it ('has an element within the .feed container', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
         });
});

    
    describe('New Feed Selection', function () {

              // tests if when a new feed is loaded by the loadFeed function that the content actually changes.
              
      let feed1;
      let feed2;

          beforeEach(function(done) {
            loadFeed(0, function () {
              feed1 = $('.feed').html();

              loadFeed(1, function () {
                feed2= $('.feed').html();
                done();
              });
            });
          });

        // tests if the content actually changes.
       
      it ('changes content', function (done) {
        expect(feed1).not.toBe(feed2);
        done();
      });


    });

}());
