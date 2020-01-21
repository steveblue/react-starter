import path from 'path';

const errorHandler = (err, req, res, next) =>
    res.status(404).json({
        message: err.message,
        status: 'error',
        stack:
            process.env.NODE_ENV === 'development' &&
            (err.stack || '')
                .split('\n')
                .map((line) => line.trim())
                .map((line) => line.split(path.sep).join('/'))
                .map((line) =>
                    line.replace(
                        process
                            .cwd()
                            .split(path.sep)
                            .join('/'),
                        '.'
                    )
                ),
    });

export default errorHandler;
