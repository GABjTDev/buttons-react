import React from 'react'
import { Button } from './Button';

export const GridButton = () => {
    return (

        <div className="box-button">
            <div className="btn">
                <Button value="Default" title="<Button />" />
                <Button value="Default" title={`&:hover, &:focus`} clase="btn-gray" />
            </div>

            <div className="btn">
                <Button value="Default" title="<Button variant=”outline” />" clase="btn-outline" />
                <Button value="Default" title={`&:hover, &:focus`} clase="btn-outline-active" />
            </div>

            <div className="btn">
                <Button value="Default" title="<Button variant=”text” />" clase="btn-text" />
                <Button value="Default" title={`&:hover, &:focus`} clase="btn-text-active" />
            </div>

            <div className="btn">
                <Button value="Default" title="<Button disableShadow />" clase="btn-shadowoff" />
            </div>

            <div className="btn">
                <Button value="Disabled" title="<Button disabled />" clase="btn-disabled" />
                <Button value="Disabled" title="<Button variant=”text” disabled />" clase="btn-disabled-active" />
            </div>

            <div className="btn">
                <Button value="Disabled" title="<Button startIcon=”local_grocery_store” />" />
                <Button value="Disabled" title="<Button endIcon=”local_grocery_store” />" />
            </div>

            <div className="btn">
                <Button value="Default" title="<Button size=”sm” />" clase="btn-primary btn-sm" />
                <Button value="Default" title="<Button size=”md” />" clase="btn-primary btn-md" />
                <Button value="Default" title="<Button size=”lg” />" clase="btn-primary btn-lg" />
            </div>

            <div className="btn btn-flex">
                <div className="btn">
                    <Button value="Default" title="<Button color=”default” />" />
                    <Button value="Default" title="<Button color=”primary” />" clase="btn-primary" />
                    <Button value="Secondary" title="<Button color=”secondary” />" clase="btn-secondary" />
                    <Button value="Danger" title="<Button color=”danger” />" clase="btn-danger" />
                </div>

                <div className="btn">
                    <Button value="Default" title={`&:hover, &:focus`} clase="btn-gray" />
                    <Button value="Default" clase="btn-primary btn-primary-active" />
                    <Button value="Secondary" clase="btn-secondary btn-secondary-active" />
                    <Button value="Danger" clase="btn-danger btn-danger-active" />
                </div>
            </div>
        </div>
    )
}
