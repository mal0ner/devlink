import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { UserDoc } from '@/utils/firebase';

import { Link, useNavigate } from 'react-router-dom';

import { Loader2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import React from 'react';

type MenuProps = {
  user: UserDoc | null;
  loading: boolean;
  error: Error | undefined;
  signOut: () => Promise<void>;
};

function FlatMenu(props: MenuProps) {
  const navigate = useNavigate();
  if (props.loading) {
    return (
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              to={'/find/freelancers'}
              className={navigationMenuTriggerStyle()}
            >
              Find Devs
            </Link>
          </NavigationMenuItem>

          {/* TODO: Add ShadCN/UI altert dialog element here to trigger when there is no user logged in  */}
          <NavigationMenuItem>
            <Link to={'/jobs'} className={navigationMenuTriggerStyle()}>
              Find Jobs
            </Link>
          </NavigationMenuItem>

          <NavigationMenu>
            <div className="p-10 gap-6 w-full flex flex-col items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          </NavigationMenu>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  if (props.error) {
    return <div>Error... {props.error.message}</div>;
  }

  if (props.user) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              to={'/find/freelancers'}
              className={navigationMenuTriggerStyle()}
            >
              Find Devs
            </Link>
          </NavigationMenuItem>

          {/* TODO: Add ShadCN/UI altert dialog element here to trigger when there is no user logged in  */}
          <NavigationMenuItem>
            <Link to={'/jobs'} className={navigationMenuTriggerStyle()}>
              Find Jobs
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="flex items-center">
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1 p-3 md:w-[150px] lg:w-[250px]">
                  <h1>{props.user.displayName}</h1>
                  <Separator />
                  <Link to="/profile/posts">
                    <ListItem>Posts</ListItem>
                  </Link>
                  <Link to="/profile">
                    <ListItem>Profile</ListItem>
                  </Link>
                  <Separator />
                  <ListItem
                    onClick={() => {
                      props.signOut();
                      navigate('/');
                    }}
                    className="cursor-pointer"
                  >
                    Sign Out
                  </ListItem>
                </ul>
              </NavigationMenuContent>
              <img src={props.user.photoURL} alt="profile picture" width={50} />
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  } else {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              to={'/find/freelancers'}
              className={navigationMenuTriggerStyle()}
            >
              Find Devs
            </Link>
          </NavigationMenuItem>

          {/* TODO: Add ShadCN/UI altert dialog element here to trigger when there is no user logged in  */}
          <NavigationMenuItem>
            <Link to={'/jobs'} className={navigationMenuTriggerStyle()}>
              Find Jobs
            </Link>
          </NavigationMenuItem>
          <div className="flex">
            <NavigationMenuItem>
              <Link to={'/login'} className={navigationMenuTriggerStyle()}>
                Login
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={'/signup'} className={navigationMenuTriggerStyle()}>
                Create Account
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-sky-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default FlatMenu;
