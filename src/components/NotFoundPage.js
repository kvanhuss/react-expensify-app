import React from 'react';
import { Link } from 'react-router-dom';

// Link allows client-side routing vs. server-side

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;