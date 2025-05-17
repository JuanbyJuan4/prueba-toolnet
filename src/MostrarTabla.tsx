import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { useNavigate } from 'react-router-dom';

//example data type
type Personaje = {
    id: number;
    name: string;
    gender: string;
    origin: {
        name: string;
    };
    specie: string;
    image: string;
};

const Example = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<Personaje[]>([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((res) => res.json())
            .then((json) => setData(json.results))
            .catch((err) => console.error(err));
    }, []);
    
    const columns = useMemo<MRT_ColumnDef<Personaje>[]>(
        () => [
        {
            accessorKey: 'name',
            header: 'Name',
            size: 150,
        },
        {
            accessorKey: 'gender',
            header: 'Gender',
            size: 150,
        },
        {
            accessorKey: 'origin.name',
            header: 'Origin',
            size: 200,
        },
        {
            accessorKey: 'species',
            header: 'Specie',
            size: 150,
        },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        initialState: {
            isFullScreen: true,
        },
        muiTableBodyRowProps: ({ row }) => ({
            onClick: () => {
                navigate(`/personaje/${row.original.id}`);
            },
        style: { cursor: 'pointer' },
    }),
    });

    return <MaterialReactTable table={table} />;
};

export default Example;