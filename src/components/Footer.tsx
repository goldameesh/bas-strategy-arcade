import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-white/10 bg-black/20 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Bhramaastra Advisory Services. All rights reserved.
                </div>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">
                        Terms of Use
                    </Link>
                    <Link href="/architecture" className="text-gray-400 hover:text-gold transition-colors">
                        Architecture
                    </Link>
                    <Link href="/vision" className="text-gray-400 hover:text-gold transition-colors">
                        Vision Map
                    </Link>
                    <Link href="/governance" className="text-gray-400 hover:text-gold transition-colors">
                        Governance
                    </Link>
                </div>
            </div>
        </footer>
    );
}
