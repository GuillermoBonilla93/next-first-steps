import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title2',
 description: 'SEO Description2',
 keywords: ['About Page2', 'Guillermo2', 'TypeScript2'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}