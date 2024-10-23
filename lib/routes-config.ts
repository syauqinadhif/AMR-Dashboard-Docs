// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  // {
  //   title: "Getting Started",
  //   href: "/getting-started",
  //   noLink: true,
  //   items: [
  //     { title: "Introduction", href: "/introduction" },
  //     {
  //       title: "Installation",
  //       href: "/installation",
  //       items: [
  //         { title: "Laravel", href: "/laravel" },
  //         { title: "React", href: "/react" },
  //         { title: "Gatsby", href: "/gatsby" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Server Actions",
  //   href: "/server-actions",
  //   noLink: true,
  //   items: [
  //     { title: "getSession", href: "/getSession" },
  //     { title: "getToken", href: "/getToken" },
  //   ],
  // },
  {
    title: "Frontend",
    href: "/frontend",
    noLink: true,
    items: [
      { title: "agentsPage", href: "/agentsPage",
      items: [
        { title: "agentCard", href: "/agentCard" },
        { title: "agentPortStatus", href: "/agentPortStatus" },
        { title: "agentStatus", href: "/agentStatus" },
      ], },
      {
        title: "statusPage",
        href: "/statusPage",
        items: [
          { title: "agentStatusCard", href: "/agentStatusCard" },
        ],
      },
      {
        title: "controlPage",
        href: "/controlPage",
        items: [
          { title: "agentControl", href: "/agentControl" },
          { title: "agentList", href: "/agentList" },
          { title: "agentListItem", href: "/agentListItem" },
          { title: "controlPad", href: "/controlPad" },
          { title: "mapButtons", href: "/mapButtons" },
          { title: "mapContextMenu", href: "/mapContextMenu" },
          { title: "recentLogs", href: "/recentLogs" },
        ],
      },
    ],
  },
    {
    title: "Backend",
    href: "/backend",
    noLink: true,
    items: [
      { title: "startServices", href: "/startServices" },
      { title: "models", href: "/models", 
      items: [
        { title: "agents", href: "/agents" },
      ],},
      { title: "services", href: "/services",
      items: [
        { title: "agentCommService", href: "/agentCommService" },
        { title: "autoReconnectTCP", href: "/autoReconnectTCPClients" },
        { title: "databaseService", href: "/databaseService" },
        { title: "mapProviderService", href: "/mapProviderService" },
        { title: "webSocketService", href: "/webSocketService" },
      ], },
      // { title: "utils", href: "/utils" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
