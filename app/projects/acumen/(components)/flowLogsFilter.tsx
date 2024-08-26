import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import FilterComponent from "./filterComponent"

export default function FlowLogsFilter() {
    return (
        <Sheet>
            <SheetTrigger><div className=" text-8xl font-bold">
                <AdjustmentsHorizontalIcon className="w-12 mr-4" />
            </div></SheetTrigger>
            <SheetContent className="overflow-scroll text-xs">
                <SheetHeader>
                    <SheetTitle>Select Filter options:</SheetTitle>
                    <SheetDescription>
                        Add filters to Include/Exclude Search parameters
                    </SheetDescription>
                </SheetHeader>
                <FilterComponent />
                <SheetFooter>
                    <SheetClose asChild>
                        {/* <Button variant="default" type="submit">Apply</Button> */}
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}