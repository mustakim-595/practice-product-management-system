
import { useState } from "react";
import {
    Search,
    ShoppingBag,
    UserRound,
} from "lucide-react";

const Header = ({ onChangeSearch }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        onChangeSearch(e.target.search.value);
    }

    return (
        <header className="w-full flex justify-center items-center border-b border-slate-400 bg-slate-900 backdrop-blur-3xl py-3 sticky top-0 z-50 shadow-sm">

            <div className="w-full max-w-6xl grid grid-cols-3">

                {/* Logo and Brand */}
                <div className="flex shrink-0 items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-slate-900 shadow-sm">
                        <ShoppingBag size={25} strokeWidth={2} />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-cyan-400">
                            Product Manager
                        </h1>
                        <p className="text-xs text-slate-500">
                            Manage your products
                        </p>
                    </div>
                </div>

                {/* Search, Create */}
                <div className="flex justify-center items-center gap-5">

                    {/* Search Input */}
                    <form
                        onSubmit={handleSearch}
                        className="flex relative overflow-hidden w-full">

                        <button
                            type="submit"
                            className="absolute right-0 top-1/2 -translate-y-1/2 h-10 px-5 rounded-xl cursor-pointer text-cyan-400"
                        >
                            <Search size={20} />
                        </button>

                        <input
                            type="text"
                            name="search"
                            placeholder="Search products..."
                            className="h-11 w-full rounded-xl border border-slate-500/50 bg-slate-500/10 pl-5 pr-10 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400
                            focus:bg-slate-500/20 focus:ring-indigo-50"
                        />
                    </form>

                </div>

                {/* Profile Section */}
                <div className="flex min-w-0 justify-end items-center">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-500/20 border-2 border-cyan-500 text-cyan-500">
                        <UserRound size={22} />
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;
