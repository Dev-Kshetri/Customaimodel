"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const aiComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Natural Language Processing",
        href: "/docs/ai/nlp",
        description:
            "Understand and generate human-like text with our advanced natural language processing models.",
    },
    {
        title: "Computer Vision",
        href: "/docs/ai/computer-vision",
        description:
            "Explore the world of computer vision and image recognition using state-of-the-art AI algorithms.",
    },
    {
        title: "Speech Recognition",
        href: "/docs/ai/speech-recognition",
        description:
            "Convert spoken language into written text with our powerful speech recognition models.",
    },
    {
        title: "Machine Learning Basics",
        href: "/docs/ai/machine-learning-basics",
        description: "Learn the fundamentals of machine learning and AI algorithms.",
    },
    {
        title: "Chatbots",
        href: "/docs/ai/chatbots",
        description:
            "Build intelligent chatbots that can engage in natural language conversations with users.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Custom Ai Model
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Explore our library of AI Model for seamless integration into your applications. Accessible. Customizable. Open Source.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Learn about our AI components library built using cutting-edge AI technologies.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                Get started with installing and incorporating AI Model into your projects.
                            </ListItem>
                            <ListItem href="/docs/ai/best-practices" title="Best Practices">
                                Discover best practices for designing and implementing AI solutions in your applications.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>AI Model</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {aiComponents.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            AI Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
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
    )
})
ListItem.displayName = "ListItem"
