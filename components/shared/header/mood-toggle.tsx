'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes"; 
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const MoodToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted) {
        return null;
    }

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                    { theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'ligh'} onClick={() => setTheme('ligh')}>
                    Ligh
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu> 
    );
}
 
export default MoodToggle;