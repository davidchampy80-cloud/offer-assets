/*
 * Offer HQ: the list of everything the Offer built.
 *
 * One block per tool. To add one, copy a block, give it a new id and put it in a group.
 * Cards appear in the order of this file and are numbered automatically.
 *
 * url: leave '' until the link exists; the card then shows "Link to come".
 * This site is public: only link apps or files that ask for a leroymerlin.co.za login
 * (Apps Script deployments under /a/macros/leroymerlin.co.za/, Drive files that are not
 * shared "Anyone with the link"). No figures, margins or strategy in the blurbs.
 */
window.OFFER_HQ = {
  updated: '26 Oct 2026',

  groups: [
    { id: 'intel',   label: 'Intelligence', title: 'Know the market',  line: 'What moved overnight, and what it means for our range.' },
    { id: 'range',   label: 'Range',        title: 'Build the range',  line: 'From the collection to the product on the shelf.' },
    { id: 'plans',   label: 'Execution',    title: 'Deliver the plan', line: 'Owners, deadlines, and where we land.' },
    { id: 'rituals', label: 'Rituals',      title: 'Lead together',    line: 'How we decide, share and listen.' },
    { id: 'people',  label: 'People',       title: 'Grow our people',  line: 'Know your role, know your range.' }
  ],

  tools: [
    {
      id: 'portal', group: 'intel', name: 'Offer Portal',
      blurb: "Today's radar: the daily brief, your action feed, raw materials and tariffs, the competitor price benchmark, and a search across every past brief.",
      audience: 'Whole Offer team',
      url: 'https://script.google.com/a/macros/leroymerlin.co.za/s/AKfycbwH4mfb7SKaq86BkP_RH5WI5o4Cr9S-5BPaZ25HMnTwfVdWGlSimm0yqx-orI4XT71W7Q/exec',
      tags: 'radar daily brief digest news action feed prices benchmark tariffs raw materials competitors archive'
    },
    {
      id: 'dima', group: 'intel', name: 'Intelligence Dima',
      blurb: "The daily intelligence engine, tuned to Dima's scope and decisions.",
      audience: "Dima's team",
      url: '',
      tags: 'intelligence market signals brief'
    },
    {
      id: 'collections', group: 'range', name: 'Collections',
      blurb: 'Collection Days and the yearly range review: one deck per department, the shared template and the review notes.',
      audience: 'CatMans · Market Leaders',
      url: '',
      tags: 'collection days range review decks template rollout stores new products'
    },
    {
      id: 'rangelist', group: 'range', name: 'Range List',
      blurb: 'The reference range by department: what is in, what is out, and where it sits.',
      audience: 'CatMans · Stores',
      url: '',
      tags: 'range list assortment skus departments listing delisting'
    },
    {
      id: 'listing', group: 'range', name: 'Listing Request',
      blurb: 'A store asks for a product, the CatMan decides, and everyone follows it from request to delivery.',
      audience: 'Stores · CatMans',
      url: 'https://docs.google.com/spreadsheets/d/1rc6YOywZgIvjeDNJI1Q9KJ_oukkfkQVKman9bKjgDwE/edit',
      tags: 'listing request new product store sku newness referencing'
    },
    {
      id: 'sourcing', group: 'range', name: 'Sourcing',
      blurb: 'Where our products come from: local SA vendors or Adeo MDH import, and the role each sourcing pillar plays in the range.',
      audience: 'CatMans · Back-Office',
      url: '',
      tags: 'sourcing vendors suppliers import mdh local pillars landed cost'
    },
    {
      id: 'pros', group: 'range', name: 'Pros',
      blurb: 'The Pro offer: the blueprint, the playbook and the trackers to win the trade customer.',
      audience: 'CatMans D02 · D03 · D04 · D10',
      url: '',
      tags: 'pro pros trade contractor builder bakkie range blueprint playbook tracker'
    },
    {
      id: 'plans', group: 'plans', name: 'Detailed Plans Trackers',
      blurb: 'Every detailed plan in one tracker: the owner, the deadline, the status, and where we land against plan.',
      audience: 'Market Leaders · CatMans',
      url: '',
      tags: 'detailed plans trackers actions landing deadlines owners status'
    },
    {
      id: 'cft', group: 'plans', name: 'CFT Tool',
      blurb: 'Cross-functional projects in one place: who is on the team, the plan, and the decisions taken.',
      audience: 'Project teams',
      url: '',
      tags: 'cft cross-functional project team'
    },
    {
      id: 'diaan', group: 'plans', name: 'Tools Diaan',
      blurb: "The Offer Back-Office toolkit, built with Diaan's team: the admin, data and checks that keep the range clean.",
      audience: 'Offer Back-Office',
      url: '',
      tags: 'back-office back office admin data master data checks pricing tools'
    },
    {
      id: 'exco', group: 'rituals', name: 'EXCO 2.0',
      blurb: 'How the Offer EXCO runs: our rituals, who decides what, and the commitments we track.',
      audience: 'Offer EXCO',
      url: '',
      tags: 'exco leadership rituals decisions commitments governance'
    },
    {
      id: 'forum', group: 'rituals', name: 'Offer Forum',
      blurb: 'Once a month, the whole Offer in one room: Brutal Facts, a Deep Dive, a store Spotlight, then VOX. The floor is yours.',
      audience: 'Whole Offer team',
      url: '',
      tags: 'forum monthly brutal facts deep dive spotlight read playbook manifesto'
    },
    {
      id: 'vox', group: 'rituals', name: 'VOX',
      blurb: 'Post the question you would not ask in the corridor, and vote for the ones that matter. The Offer EXCO answers them at the Forum.',
      audience: 'Everyone',
      url: '',
      tags: 'vox questions ideas vote voice feedback forum'
    },
    {
      id: 'academy', group: 'people', name: 'Offer Product Academy',
      blurb: 'Product knowledge for the Offer team and the stores: learn the range, one product family at a time.',
      audience: 'Offer team · Stores',
      url: '../',
      tags: 'academy training product knowledge learning courses'
    },
    {
      id: 'jobs', group: 'people', name: 'Job Descriptions',
      blurb: 'Every Offer role on one page: the mission, the scope, the KPIs that count, and who you work with.',
      audience: 'Everyone · New joiners',
      url: '',
      tags: 'job descriptions fiches de poste roles responsibilities kpis onboarding'
    }
  ]
};
