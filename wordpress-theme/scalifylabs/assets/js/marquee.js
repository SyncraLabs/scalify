/**
 * ScalifyLabs - Tech Marquee JS
 * Infinite scrolling tool list (two rows, opposite directions)
 */

(function() {
  'use strict';

  var tools = [
    'Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Figma',
    'Google Ads', 'Meta Ads', 'TikTok Ads', 'Semrush', 'Ahrefs',
    'Google Analytics', 'Vercel', 'Shopify', 'WordPress', 'Framer',
    'Notion', 'Slack', 'HubSpot', 'Mailchimp', 'Stripe'
  ];

  function createMarqueeRow(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var track = document.createElement('div');
    track.className = 'marquee-track';

    // Double the items for seamless loop
    var allTools = tools.concat(tools);

    allTools.forEach(function(tool) {
      var item = document.createElement('div');
      item.className = 'marquee-item';
      item.innerHTML = '<div class="marquee-dot"></div><span class="marquee-name">' + tool + '</span>';
      track.appendChild(item);
    });

    container.appendChild(track);
  }

  document.addEventListener('DOMContentLoaded', function() {
    createMarqueeRow('marquee-row-1');
    createMarqueeRow('marquee-row-2');
  });

})();
