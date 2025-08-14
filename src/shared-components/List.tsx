export const List: React.FC<
  { children: React.ReactNode } & React.HTMLProps<HTMLUListElement>
> = ({ children, className, ...rest }) => (
  <ul role="list" className={`divide-y divide-gray-100 ${className}`} {...rest}>
    {children}
  </ul>
);

export const ListItem: React.FC<
  { children: React.ReactNode } & React.HTMLProps<HTMLLIElement>
> = ({ children, className, ...rest }) => (
  <li className={`flex justify-between gap-x-6 py-5 ${className}`} {...rest}>
    {children}
  </li>
);
