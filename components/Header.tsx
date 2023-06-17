export function Header() {
  const menus = [
    { name: "Top", href: "/" },
    { name: "New", href: "/new" },
    { name: "Show", href: "/show" },
    { name: "Ask", href: "/ask" },
    { name: "Jobs", href: "/jobs" }
  ];

  return (
    <header class="bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4 dark:(bg-gray-900 text-white)">
      <nav class="flex items-center flex-1">
        <div class="text-2xl ml-1 font-bold">
          HN Fresh
        </div>
      </nav>
      
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a 
              href={menu.href} 
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500 dark:(text-gray-400 hover:text-gray-500)"}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}